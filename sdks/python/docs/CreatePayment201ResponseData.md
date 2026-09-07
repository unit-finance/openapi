# CreatePayment201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WirePaymentAttributes**](WirePaymentAttributes.md) |  | 
**relationships** | [**WirePaymentRelationships**](WirePaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.create_payment201_response_data import CreatePayment201ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePayment201ResponseData from a JSON string
create_payment201_response_data_instance = CreatePayment201ResponseData.from_json(json)
# print the JSON string representation of the object
print(CreatePayment201ResponseData.to_json())

# convert the object into a dict
create_payment201_response_data_dict = create_payment201_response_data_instance.to_dict()
# create an instance of CreatePayment201ResponseData from a dict
create_payment201_response_data_from_dict = CreatePayment201ResponseData.from_dict(create_payment201_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


