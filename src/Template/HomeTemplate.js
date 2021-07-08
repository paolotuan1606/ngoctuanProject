import React from 'react';
import { Fragment } from 'react';
import Header from '../Conponent/Header/Header';
import { Route } from 'react-router';

export default function HomeTemplate(props) {
    return (
        <div>
            <Fragment>
                <Route path={props.path} exact render={(propsRoute) => {
                    return <Fragment>
                        <Header {...propsRoute} />
                        <props.component {...propsRoute} />
                    </Fragment>
                }} />
            </Fragment>
        </div>
    )
}
