# VerifyAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**VerifyAccountDataAttributes**](VerifyAccountDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.verify_account_data import VerifyAccountData

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyAccountData from a JSON string
verify_account_data_instance = VerifyAccountData.from_json(json)
# print the JSON string representation of the object
print(VerifyAccountData.to_json())

# convert the object into a dict
verify_account_data_dict = verify_account_data_instance.to_dict()
# create an instance of VerifyAccountData from a dict
verify_account_data_from_dict = VerifyAccountData.from_dict(verify_account_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


