trigger emptrg on Employee__c (after insert, after update, after delete, after undelete) {
    if (Trigger.isAfter && Trigger.isUpdate) {
        trgHandler.trgMethod(Trigger.new, Trigger.oldMap);
    } else if (Trigger.isAfter && Trigger.isDelete) {
        trgHandler.trgMethod(Trigger.old, null);
    } else {
        trgHandler.trgMethod(Trigger.new, null);
    }
}

