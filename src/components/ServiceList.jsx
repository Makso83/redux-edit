import React from 'react'
import ServiceItem from './ServiceItem'
import { useSelector, useDispatch } from 'react-redux'
import { removeServiceAC } from '../redux/action-creators';

function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const onDeleteItem = (id) => {
        dispatch(removeServiceAC(id));
    }
    return (
        <div>
            {items.map((item) => <ServiceItem key={item.id} id={item.id} service={item.service} price={item.price} removeService={onDeleteItem} />)}
            
        </div>
    )
}

export default ServiceList
