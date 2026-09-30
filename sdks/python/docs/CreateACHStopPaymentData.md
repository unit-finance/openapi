# CreateACHStopPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateACHStopPaymentDataAttributes**](CreateACHStopPaymentDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_ach_stop_payment_data import CreateACHStopPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHStopPaymentData from a JSON string
create_ach_stop_payment_data_instance = CreateACHStopPaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateACHStopPaymentData.to_json())

# convert the object into a dict
create_ach_stop_payment_data_dict = create_ach_stop_payment_data_instance.to_dict()
# create an instance of CreateACHStopPaymentData from a dict
create_ach_stop_payment_data_from_dict = CreateACHStopPaymentData.from_dict(create_ach_stop_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


