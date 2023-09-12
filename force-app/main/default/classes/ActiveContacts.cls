public with sharing class ActiveContacts {

 

    
    @InvocableMethod
    public static void countContacts(List<Id> accids)
    {
        
    List<Account> accountlist = [SELECT Id, Name, 	Number_of_active_contacts__c,
    (SELECT Id, Name,Active_Status__c From Contacts WHERE Active_Status__c=true)
    From Account WHERE Id =: accids];




    for(Account account : accountlist) 
    {
    account.Number_of_active_contacts__c = account.Contacts.size();
  
    }
    if(!accountlist.isEmpty())
    {
      update accountlist;
    }
    
}
}   







