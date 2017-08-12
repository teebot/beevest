import * as React from 'react';

export type CompanyInfoProps = {};

export const CompanyInfo = (props: CompanyInfoProps): JSX.Element =>
    <div className="row company-form">
        <div className="col-sm-6">
            <div className="form-group"><label className="control-label" htmlFor="companyName">Company Name</label>
                <input className="form-control" type="text" name="companyName" id="companyName" />
            </div>
            <div className="form-group"><label className="control-label" htmlFor="vatNumber">VAT number</label>
                <input className="form-control" type="text" name="vatNumber" id="vatNumber" />
            </div>
        </div>
    </div>