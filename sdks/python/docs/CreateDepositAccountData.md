# CreateDepositAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateDepositAccountDataAttributes**](CreateDepositAccountDataAttributes.md) |  | 
**relationships** | [**CreateDepositAccountDataRelationships**](CreateDepositAccountDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_deposit_account_data import CreateDepositAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDepositAccountData from a JSON string
create_deposit_account_data_instance = CreateDepositAccountData.from_json(json)
# print the JSON string representation of the object
print(CreateDepositAccountData.to_json())

# convert the object into a dict
create_deposit_account_data_dict = create_deposit_account_data_instance.to_dict()
# create an instance of CreateDepositAccountData from a dict
create_deposit_account_data_from_dict = CreateDepositAccountData.from_dict(create_deposit_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


