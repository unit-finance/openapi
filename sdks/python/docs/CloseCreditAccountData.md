# CloseCreditAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CloseCreditAccountDataAttributes**](CloseCreditAccountDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.close_credit_account_data import CloseCreditAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of CloseCreditAccountData from a JSON string
close_credit_account_data_instance = CloseCreditAccountData.from_json(json)
# print the JSON string representation of the object
print(CloseCreditAccountData.to_json())

# convert the object into a dict
close_credit_account_data_dict = close_credit_account_data_instance.to_dict()
# create an instance of CloseCreditAccountData from a dict
close_credit_account_data_from_dict = CloseCreditAccountData.from_dict(close_credit_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


