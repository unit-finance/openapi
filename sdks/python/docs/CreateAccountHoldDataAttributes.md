# CreateAccountHoldDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents). Minimum is 1. | 
**idempotency_key** | **str** | 1 to 255 characters. See Idempotency. | 
**expired_at** | **date** | Optional. Date only (e.g. \&quot;2024-10-29\&quot;). The date the account hold will be automatically released at. | [optional] 
**description** | **str** | Optional. Description of the AccountHold (maximum of 80 characters). | [optional] 
**tags** | **Dict[str, object]** | Optional. See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_account_hold_data_attributes import CreateAccountHoldDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAccountHoldDataAttributes from a JSON string
create_account_hold_data_attributes_instance = CreateAccountHoldDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateAccountHoldDataAttributes.to_json())

# convert the object into a dict
create_account_hold_data_attributes_dict = create_account_hold_data_attributes_instance.to_dict()
# create an instance of CreateAccountHoldDataAttributes from a dict
create_account_hold_data_attributes_from_dict = CreateAccountHoldDataAttributes.from_dict(create_account_hold_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


