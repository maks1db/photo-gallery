import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'Admin/Form.jsx';
import Items from 'Admin/Items.jsx';
import Inputs from 'Register/UserInfo.jsx';
import AdminControls from 'Admin/AdminControls.jsx';
import { items, itemResult, setItemActive, saveItem, setModify, removeItem } from 'actions/adminObjects';
import { toastr } from 'react-redux-toastr';

function mapStateToProps(state) {
    return {
        items: state.admin.items,
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
        setItemActive: (id) => {
            dispatch(setItemActive(id)); 
            dispatch(itemResult('users', id))
        },
        onSave: (obj) => dispatch(saveItem('users', obj, 'name')),
        setModify: (key, value) => dispatch(setModify(key, value)),
        onRemove: (id) => dispatch(removeItem('users', id, {name: 1}))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Admin extends Component {
    constructor() {
        super();
    }

    onDelete= () => {
        const {
            items, onRemove
        } = this.props;

        const toastrConfirmOptions = {
            onOk: () => {
                const id = items.data.find(x=>x.active)._id;
                onRemove(id);
            },
            okText: 'Удалить',
            cancelText: 'Отмена'
        };

        toastr.confirm('Удалить текущий объект?', toastrConfirmOptions);
    }

    componentWillMount() {
        this.props.getItems()
    }

    render() {

        const {
            items,
            itemResult,
            setItemActive,
            setModify,
            modify,
            onSave,
            itActive,
            role
        } = this.props;

        return (
            <div>
                <Form>
                    <Items 
                        title="Пользователи"
                        itemKey="name"
                        items={items}
                        setItemActive={setItemActive}
                    />
                    {!itemResult.isFetching && <Inputs
                        admin={true}
                        result={itemResult}
                        setModify={setModify}
                    />}
                    
                </Form>
                {role === 'superadmin' &&<AdminControls 
                    active={itActive}
                    onSave={() => onSave({...modify, '_id': items.data.find(x=>x.active)._id})}
                    onDelete={this.onDelete}
                />}
            </div>
            
        );
    }
}