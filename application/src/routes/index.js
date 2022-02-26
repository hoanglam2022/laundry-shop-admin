import React, {Component} from "react"
import {Switch} from "react-router-dom"
import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'

import {HomePage} from '../features/Home'
import {Login, Register} from '../features/Auth'
import {ErrorPage} from "../features/Exceptions";

import {
    Index as ProductIndex,
    Create as ProductCreate,
    Detail as ProductDetail,
} from '../features/Product'

import {
    Index as CustomerIndex,
    Create as CustomerCreate,
    Detail as CustomerDetail,
} from '../features/Customer'

class AllRoutes extends Component {
    render() {
        return (
            <Switch>
                <PublicRoute path="/login" layout='Auth'><Login/></PublicRoute>
                <PublicRoute path="/register" layout='Auth'><Register/></PublicRoute>

                <PrivateRoute path="/" exact={true}><HomePage/></PrivateRoute>
                <PrivateRoute path="/products" exact={true}><ProductIndex/></PrivateRoute>
                <PrivateRoute path="/products/create"><ProductCreate/></PrivateRoute>
                <PrivateRoute path="/products/detail/:id" exact={true}><ProductDetail/></PrivateRoute>

                <PrivateRoute path="/customers" exact={true}><CustomerIndex/></PrivateRoute>
                <PrivateRoute path="/customers/create"><CustomerCreate/></PrivateRoute>
                <PrivateRoute path="/customers/detail/:id" exact={true}><CustomerDetail/></PrivateRoute>

                <PublicRoute path="*"><ErrorPage code={404}/></PublicRoute>
            </Switch>
        );
    }

}

export default AllRoutes
