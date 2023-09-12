public class trgHandler {
    public static void trgMethod(List<Employee__c> empList, Map<Id, Employee__c> oldMap) {
        Set<Id> parentIds = new Set<Id>();
        Map<Id, Decimal> maxSalaryMap = new Map<Id, Decimal>();
        Map<Id, Decimal> minSalaryMap = new Map<Id, Decimal>();

        if (!empList.isEmpty()) {
            for (Employee__c newEmp : empList) {
                if (oldMap != null) {
                    Employee__c oldEmp = oldMap.get(newEmp.Id);

                    if (oldEmp.Name != newEmp.Name) {
                        parentIds.add(oldEmp.Name);
                        parentIds.add(newEmp.Name);
                    }
                    else {
                        parentIds.add(newEmp.Name);
                    }
                }
                else {
                    parentIds.add(newEmp.Name);
                }
            }
        }

        List<Employee__c> relatedEmployees = [SELECT Id, Tech_Firm__c, Salary__c
                                              FROM Employee__c
                                              WHERE Tech_Firm__c IN :parentIds
                                              ORDER BY Tech_Firm__c, Salary__c];

        for (Employee__c emp : relatedEmployees) {
            if (!maxSalaryMap.containsKey(emp.Name)) {
                maxSalaryMap.put(emp.Name emp.Salary__c);
            }
            else {
                maxSalaryMap.put(emp.Name, Math.max(maxSalaryMap.get(emp.Name), emp.Salary__c));
            }

            if (!minSalaryMap.containsKey(emp.Name)) {
                minSalaryMap.put(emp.Name emp.Salary__c);
            }
            else {
                minSalaryMap.put(emp.Name, Math.min(minSalaryMap.get(emp.Name), emp.Salary__c));
            }
        }

        List<Tech_Firm__c> techFirmList = new List<Tech_Firm__c>();

        for (Id parentId : parentIds) {
            Tech_Firm__c tf = new Tech_Firm__c();
            tf.Id = parentId;

            if (maxSalaryMap.containsKey(parentId)) {
                tf.Max_Salary__c = maxSalaryMap.get(parentId);
            }

            if (minSalaryMap.containsKey(parentId)) {
                tf.Min_Salary__c = minSalaryMap.get(parentId);
            }

            techFirmList.add(tf);
        }

        if (!techFirmList.isEmpty()) {
            update techFirmList;
        }
    }
}