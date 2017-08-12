import * as React from 'react';

export type PersonInfoProps = {};

export const PersonInfo = (props: PersonInfoProps): JSX.Element =>
    <div className="row person-form">
        <div className="col-sm-6">
            <div className="form-group"><label className="control-label" htmlFor="firstName">First Name</label>
                <input className="form-control" type="text" name="firstName" id="firstName" />
            </div>
            <div className="form-group"><label className="control-label" htmlFor="lastName">Last Name</label>
                <input className="form-control" type="text" name="lastName" id="lastName" />
            </div>
        </div>
    </div>