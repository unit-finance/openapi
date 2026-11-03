# AccountHoldAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**status** | **str** | Status of the account hold: Active, PartiallyReleased or Released. | 
**amount** | **int** | The original amount (cents) of the account hold. | 
**remaining_hold_amount** | **int** | Optional. The remaining amount (cents) still being held. Only present when status is PartiallyReleased. | [optional] 
**released_at** | **date** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). The date the account hold was fully released. Only present when status is Released. | [optional] 
**expired_at** | **date** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). The date the account hold will be automatically released at. | [optional] 
**description** | **str** | Optional. Account hold description (maximum of 80 characters). | [optional] 
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


