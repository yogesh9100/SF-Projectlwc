//Implement an Apex trigger to calculate the total amount of an Opportunity’s related Opportunity Products and update a custom field on the Opportunity.
trigger UpdateOpportunityTotalAmount on OpportunityLineItem (after insert, after update, after delete, after undelete) {
    Set<Id> opportunityIds = new Set<Id>();

    for (OpportunityLineItem oli : Trigger.new) {
        opportunityIds.add(oli.OpportunityId);
    }

    List<Opportunity> opportunitiesToUpdate = new List<Opportunity>();

    for (AggregateResult result : [
        SELECT OpportunityId, SUM(TotalPrice) totalAmount
        FROM OpportunityLineItem
        WHERE OpportunityId IN :opportunityIds
        GROUP BY OpportunityId
    ]) {
        opportunitiesToUpdate.add(new Opportunity(
            Id = (Id)result.get('OpportunityId'),
            CustomTotalAmount__c = (Decimal)result.get('totalAmount')
        ));
    }

    update opportunitiesToUpdate;
}
