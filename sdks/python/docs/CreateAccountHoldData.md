# CreateAccountHoldData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateAccountHoldDataAttributes**](CreateAccountHoldDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_account_hold_data import CreateAccountHoldData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAccountHoldData from a JSON string
create_account_hold_data_instance = CreateAccountHoldData.from_json(json)
# print the JSON string representation of the object
print(CreateAccountHoldData.to_json())

# convert the object into a dict
create_account_hold_data_dict = create_account_hold_data_instance.to_dict()
# create an instance of CreateAccountHoldData from a dict
create_account_hold_data_from_dict = CreateAccountHoldData.from_dict(create_account_hold_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


