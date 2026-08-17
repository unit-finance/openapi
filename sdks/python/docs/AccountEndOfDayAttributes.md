# AccountEndOfDayAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** | The date the account end-of-day resource was created. | 
**balance** | **int** | The balance amount (in cents). The balance equals the sum of &#39;available&#39; and &#39;hold&#39;. | 
**hold** | **int** | The hold amount (in cents). Not available for spending. | 
**available** | **int** | The available balance for spending (in cents). | 
**overdraft_limit** | **int** | Optional. The overdraft limit amount. | [optional] 

## Example

```python
from unit_finance_sdk.models.account_end_of_day_attributes import AccountEndOfDayAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AccountEndOfDayAttributes from a JSON string
account_end_of_day_attributes_instance = AccountEndOfDayAttributes.from_json(json)
# print the JSON string representation of the object
print(AccountEndOfDayAttributes.to_json())

# convert the object into a dict
account_end_of_day_attributes_dict = account_end_of_day_attributes_instance.to_dict()
# create an instance of AccountEndOfDayAttributes from a dict
account_end_of_day_attributes_from_dict = AccountEndOfDayAttributes.from_dict(account_end_of_day_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


