import * as React from 'react';
import { EntityType } from '../components/EntityType.component';
import { CONSTANTS } from '../constants';
import { CompanyInfo } from '../components/CompanyInfo.component';
import { PersonInfo } from '../components/PersonInfo.component';

export interface DonateContainerProps {}
export interface DonateContainerState {
    entityType: string
}

export class DonateContainer extends React.Component<DonateContainerProps, DonateContainerState> {
    state: DonateContainerState = {
        entityType: CONSTANTS.ENTITYTYPE.COMPANY
    };

    render(): JSX.Element {
        return (
            <div>
                <h1>Donate</h1>
                <EntityType onEntityTypeChange={this.handleEntityTypeChange.bind(this)} entityType={this.state.entityType} />
                {this.state.entityType === CONSTANTS.ENTITYTYPE.COMPANY ? <CompanyInfo /> : null}
                {this.state.entityType === CONSTANTS.ENTITYTYPE.PERSON ? <PersonInfo /> : null}
            </div>
        );
    }

    handleEntityTypeChange(changeEvent: any): void {
        this.setState({ entityType: changeEvent.target.value });
    }
}
