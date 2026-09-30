# CreateStopPayment201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateStopPayment201ResponseData**](CreateStopPayment201ResponseData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_stop_payment201_response import CreateStopPayment201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateStopPayment201Response from a JSON string
create_stop_payment201_response_instance = CreateStopPayment201Response.from_json(json)
# print the JSON string representation of the object
print(CreateStopPayment201Response.to_json())

# convert the object into a dict
create_stop_payment201_response_dict = create_stop_payment201_response_instance.to_dict()
# create an instance of CreateStopPayment201Response from a dict
create_stop_payment201_response_from_dict = CreateStopPayment201Response.from_dict(create_stop_payment201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


