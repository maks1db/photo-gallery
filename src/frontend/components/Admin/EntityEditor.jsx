import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'Admin/Form.jsx';
import Items from 'Admin/Items.jsx';
//import Inputs from 'Admin/Inputs.jsx';
import AdminControls from 'Admin/AdminControls.jsx';
import { items, 
    subItems, 
    itemResult, 
    setItemActive, 
    saveItem, 
    setModify, 
    removeItem,
    newItem} from 'actions/adminObjects';
import { toastr } from 'react-redux-toastr';
import { getUserPhoto as getUserPhotoApi } from 'api/adminApi';
const FileDownload = require('react-file-download');

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
function mapDispatchToProps(dispatch, ownProps) {
    return {
        activate: (value) => dispatch(activateAdminDashboard(value)),
        getItems: () => dispatch(items(ownProps.item,
            ownProps.itemSort ?  {...ownProps.itemSort, [ownProps.itemKey]: 1} : {[ownProps.itemKey]: 1})),
        getSubItems: (id) => dispatch(subItems(ownProps.subItem,{[ownProps.itemKey]: 1})),
        setItemActive: (id) => {
            dispatch(setItemActive(id)); 
            dispatch(itemResult(ownProps.subItem || ownProps.item, id))
        },
        onSave: (obj) => dispatch(saveItem(ownProps.subItem || ownProps.item, 
                    obj, ownProps.subItem ? ownProps.subItemKey : ownProps.itemKey)),
        setModify: (key, value) => dispatch(setModify(key, value)),
        onRemove: (id) => dispatch(removeItem(ownProps.subItem || ownProps.item, id, {[ownProps.itemKey]: 1})),
        onCreate: () => dispatch(newItem(
            ownProps.subItem || ownProps.item, 
            ownProps.subItem ? ownProps.subItemKey : ownProps.itemKey,
            'Новый элемент'
        ))
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
    
                this.props.subItems.data.filter(f => f[this.props.subItemBind] === x._id)
                    .forEach(f => {
                        f.subItem = true;
                        arr.push(f);
                    });
            });

            items = {isFetching: false, data: arr};
        }
        return items;
    }

    onGetUserPhoto = () => {
        const items = this.props.subItem ? this.props.subItems : this.props.items;
        const activeItem = items.data.find(x=>x.active);

        let id = activeItem.userId ? activeItem.userId : activeItem._id;
        getUserPhotoApi(id)
            .then(x => {
                // FileDownload(x.data, 'result.zip');
                var blob = new Blob([x.data], {type: "octet/stream"});
                var fileName = "QCPReport.zip";
                saveAs(blob, fileName);
                var a = 1;
            },
        e => {
            var a = 1;
        })

    }

    onDelete= () => {
        const {
            onRemove, 
        } = this.props;

        const items = this.props.subItem ? this.props.subItems : this.props.items;

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
        this.props.getItems();

        if (this.props.subItem) this.props.getSubItems();   
    }

    render() {

        const {
            subItems,
            itemResult,
            setItemActive,
            setModify,
            modify,
            onSave,
            role,
            title,
            itemKey,
            subItemKey,
            create,
            onCreate     
        } = this.props;

        const Inputs = this.props.children;
        const items = subItemKey ? this.prepareItems() : this.props.items;
        const itActive = items.data.filter(x=>x.active).length > 0
        
        return (
            <div>
                <Form>
                    <Items 
                        title={title}
                        itemKey={itemKey}
                        subItemKey={subItemKey}
                        items={items}
                        setItemActive={setItemActive}
                    />
                    {!itemResult.isFetching && <Inputs 
                        admin={true}
                        itemResult={itemResult}
                        setModify={setModify}
                    />}
                    
                </Form>
                { role === 'superadmin' && <AdminControls 
                    create={create}
                    onCreate={onCreate}
                    active={itActive}
                    onSave={() => onSave({...modify, '_id': items.data.find(x=>x.active)._id})}
                    onDelete={this.onDelete}
                    onGetUserPhoto={this.onGetUserPhoto}
                /> }
            </div>
            
        );
    }
}