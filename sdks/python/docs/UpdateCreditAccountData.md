# UpdateCreditAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateCreditAccountDataAttributes**](UpdateCreditAccountDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_credit_account_data import UpdateCreditAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCreditAccountData from a JSON string
update_credit_account_data_instance = UpdateCreditAccountData.from_json(json)
# print the JSON string representation of the object
print(UpdateCreditAccountData.to_json())

# convert the object into a dict
update_credit_account_data_dict = update_credit_account_data_instance.to_dict()
# create an instance of UpdateCreditAccountData from a dict
update_credit_account_data_from_dict = UpdateCreditAccountData.from_dict(update_credit_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


