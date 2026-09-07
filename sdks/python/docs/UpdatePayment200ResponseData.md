# UpdatePayment200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BookPaymentAttributes**](BookPaymentAttributes.md) |  | 
**relationships** | [**BookPaymentRelationships**](BookPaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.update_payment200_response_data import UpdatePayment200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePayment200ResponseData from a JSON string
update_payment200_response_data_instance = UpdatePayment200ResponseData.from_json(json)
# print the JSON string representation of the object
print(UpdatePayment200ResponseData.to_json())

# convert the object into a dict
update_payment200_response_data_dict = update_payment200_response_data_instance.to_dict()
# create an instance of UpdatePayment200ResponseData from a dict
update_payment200_response_data_from_dict = UpdatePayment200ResponseData.from_dict(update_payment200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


