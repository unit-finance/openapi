# CreateCheckStopPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateCheckStopPaymentDataAttributes**](CreateCheckStopPaymentDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_check_stop_payment_data import CreateCheckStopPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckStopPaymentData from a JSON string
create_check_stop_payment_data_instance = CreateCheckStopPaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateCheckStopPaymentData.to_json())

# convert the object into a dict
create_check_stop_payment_data_dict = create_check_stop_payment_data_instance.to_dict()
# create an instance of CreateCheckStopPaymentData from a dict
create_check_stop_payment_data_from_dict = CreateCheckStopPaymentData.from_dict(create_check_stop_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


