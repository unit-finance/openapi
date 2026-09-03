# CreateACHPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateACHPaymentDataAttributes**](CreateACHPaymentDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_ach_payment_data import CreateACHPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHPaymentData from a JSON string
create_ach_payment_data_instance = CreateACHPaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateACHPaymentData.to_json())

# convert the object into a dict
create_ach_payment_data_dict = create_ach_payment_data_instance.to_dict()
# create an instance of CreateACHPaymentData from a dict
create_ach_payment_data_from_dict = CreateACHPaymentData.from_dict(create_ach_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


