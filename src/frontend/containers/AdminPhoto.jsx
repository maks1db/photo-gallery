import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'Admin/Form.jsx';
import Items from 'Admin/Items.jsx';
import Inputs from 'Admin/Inputs.jsx';
import AdminControls from 'Admin/AdminControls.jsx';
import { items, subItems, itemResult, setItemActive, saveItem, setModify, removeItem } from 'actions/adminObjects';
import { toastr } from 'react-redux-toastr';


function mapStateToProps(state) {
    return {
        items: state.admin.items,
        subItems: state.admin.subItems,
        itemResult: state.admin.itemResult,
        modify: state.admin.modify,
        itActive: state.admin.items.data.filter(x=>x.active).length > 0,
        role: state.app.role
    };
}
function mapDispatchToProps(dispatch) {
    return {
        activate: (value) => dispatch(activateAdminDashboard(value)),
        getItems: () => dispatch(items('users',{name: 1})),
        getSubItems: (id) => dispatch(subItems('photo',{name: 1})),
        setItemActive: (id) => {
            dispatch(setItemActive(id)); 
            dispatch(itemResult('photo', id))
        },
        onSave: (obj) => dispatch(saveItem('photo', obj, 'title')),
        setModify: (key, value) => dispatch(setModify(key, value)),
        onRemove: (id) => dispatch(removeItem('photo', id, {name: 1}))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class AdminPhoto extends Component {
    constructor() {
        super();
    }

    prepareItems = () => {
        var arr = [];
        let items;
        if (this.props.items.isFetching || this.props.subItems.isFetching) {
            items = {isFetching: true, data: []}
        } 
        else {
            this.props.items.data.map(x=> {
                x.subItem = false;
                arr.push(x);
    
                this.props.subItems.data.filter(f => f.userId === x._id)
                    .forEach(f => {
                        f.subItem = true;
                        arr.push(f);
                    });
            });

            items = {isFetching: false, data: arr};
        }
        return items;
    }

    onDelete= () => {
        const {
            subItems, onRemove, 
        } = this.props;

        const toastrConfirmOptions = {
            onOk: () => {
                const id = subItems.data.find(x=>x.active)._id;
                onRemove(id);
            },
            okText: 'Удалить',
            cancelText: 'Отмена'
        };

        toastr.confirm('Удалить текущий объект?', toastrConfirmOptions);
    }

    componentWillMount() {
        this.props.getItems();
        this.props.getSubItems();
    }

    render() {

        const {
            subItems,
            itemResult,
            setItemActive,
            setModify,
            modify,
            onSave,
            role
        } = this.props;

        const items = this.prepareItems();
        const itActive = items.data.filter(x=>x.active).length > 0
        
        return (
            <div>
                <Form>
                    <Items 
                        title="Фото пользователей"
                        itemKey="name"
                        subItemKey="title"
                        items={items}
                        setItemActive={setItemActive}
                    />
                    <Inputs 
                        itemResult={itemResult}
                        setModify={setModify}
                    />
                    
                </Form>
                { role === 'superadmin' && <AdminControls 
                    active={itActive}
                    onSave={() => onSave({...modify, '_id': items.data.find(x=>x.active)._id})}
                    onDelete={this.onDelete}
                /> }
            </div>
            
        );
    }
}