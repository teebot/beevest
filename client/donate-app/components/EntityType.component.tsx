import * as React from 'react';
import { CONSTANTS } from '../constants';

export type EntityTypeProps = {
    entityType: string,
    onEntityTypeChange: any
};

export const EntityType = (props: EntityTypeProps): JSX.Element => {
    return (
        <div className="row">
            <div className="form-group">
                <label className="radio-inline">
                    <input type="radio" name="entitytype" onChange={props.onEntityTypeChange} id="ascompany"
                       value={CONSTANTS.ENTITYTYPE.COMPANY} checked={props.entityType === CONSTANTS.ENTITYTYPE.COMPANY} />
                    As a company
                </label>
                <label className="radio-inline">
                    <input type="radio" name="entitytype" onChange={props.onEntityTypeChange} id="asperson"
                       value={CONSTANTS.ENTITYTYPE.PERSON} checked={props.entityType === CONSTANTS.ENTITYTYPE.PERSON} />
                    As an individual
                </label>
            </div>
        </div>
    );
};