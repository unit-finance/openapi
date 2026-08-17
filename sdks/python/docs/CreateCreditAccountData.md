# CreateCreditAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateCreditAccountDataAttributes**](CreateCreditAccountDataAttributes.md) |  | 
**relationships** | [**CreateDepositAccountDataRelationships**](CreateDepositAccountDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_credit_account_data import CreateCreditAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCreditAccountData from a JSON string
create_credit_account_data_instance = CreateCreditAccountData.from_json(json)
# print the JSON string representation of the object
print(CreateCreditAccountData.to_json())

# convert the object into a dict
create_credit_account_data_dict = create_credit_account_data_instance.to_dict()
# create an instance of CreateCreditAccountData from a dict
create_credit_account_data_from_dict = CreateCreditAccountData.from_dict(create_credit_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


