# UpdateACHPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateACHPaymentDataAttributes**](UpdateACHPaymentDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_ach_payment_data import UpdateACHPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateACHPaymentData from a JSON string
update_ach_payment_data_instance = UpdateACHPaymentData.from_json(json)
# print the JSON string representation of the object
print(UpdateACHPaymentData.to_json())

# convert the object into a dict
update_ach_payment_data_dict = update_ach_payment_data_instance.to_dict()
# create an instance of UpdateACHPaymentData from a dict
update_ach_payment_data_from_dict = UpdateACHPaymentData.from_dict(update_ach_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


