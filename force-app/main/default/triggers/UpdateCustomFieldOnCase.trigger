trigger UpdateCustomFieldOnCase on Case (before update) {
    List<Case> casesToUpdate = new List<Case>();
    
    for (Case caseObj : Trigger.new) {
        Case oldCase = Trigger.oldMap.get(caseObj.Id);
        
        if (caseObj.Priority != oldCase.Priority) {
            // Update the custom field when Priority is changed
            caseObj.CustomField__c = 'Priority Changed';
            casesToUpdate.add(caseObj);
        }
    }
    
    update casesToUpdate;
}
