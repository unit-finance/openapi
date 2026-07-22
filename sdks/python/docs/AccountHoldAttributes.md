# AccountHoldAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**status** | **str** | Status of the account hold, either Active, Released, PartiallyReleased. | 
**amount** | **int** | The amount (cents) of the payment. | 
**remaining_hold_amount** | **int** | Optional. The remaining amount (cents) being held. Only present when status is PartiallyReleased. | [optional] 
**expired_at** | **date** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). the date the account hold will be automatically released at. | [optional] 
**description** | **str** | Account hold description (maximum of 80 characters). | 
**tags** | **Dict[str, object]** | Optional. See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.account_hold_attributes import AccountHoldAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AccountHoldAttributes from a JSON string
account_hold_attributes_instance = AccountHoldAttributes.from_json(json)
# print the JSON string representation of the object
print(AccountHoldAttributes.to_json())

# convert the object into a dict
account_hold_attributes_dict = account_hold_attributes_instance.to_dict()
# create an instance of AccountHoldAttributes from a dict
account_hold_attributes_from_dict = AccountHoldAttributes.from_dict(account_hold_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


