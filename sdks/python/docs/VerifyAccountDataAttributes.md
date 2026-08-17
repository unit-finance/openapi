# VerifyAccountDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routing_number** | **str** | Required. Routing number (exactly 9 digits). | 
**account_number** | **str** | Required. Account number (1-17 digits). | 

## Example

```python
from unit_finance_sdk.models.verify_account_data_attributes import VerifyAccountDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyAccountDataAttributes from a JSON string
verify_account_data_attributes_instance = VerifyAccountDataAttributes.from_json(json)
# print the JSON string representation of the object
print(VerifyAccountDataAttributes.to_json())

# convert the object into a dict
verify_account_data_attributes_dict = verify_account_data_attributes_instance.to_dict()
# create an instance of VerifyAccountDataAttributes from a dict
verify_account_data_attributes_from_dict = VerifyAccountDataAttributes.from_dict(verify_account_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


