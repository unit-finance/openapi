# CreatePayment201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreatePayment201ResponseData**](CreatePayment201ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_payment201_response import CreatePayment201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePayment201Response from a JSON string
create_payment201_response_instance = CreatePayment201Response.from_json(json)
# print the JSON string representation of the object
print(CreatePayment201Response.to_json())

# convert the object into a dict
create_payment201_response_dict = create_payment201_response_instance.to_dict()
# create an instance of CreatePayment201Response from a dict
create_payment201_response_from_dict = CreatePayment201Response.from_dict(create_payment201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


