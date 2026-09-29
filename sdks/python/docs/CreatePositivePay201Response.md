# CreatePositivePay201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListPositivePay200ResponseDataInner**](ListPositivePay200ResponseDataInner.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_positive_pay201_response import CreatePositivePay201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePositivePay201Response from a JSON string
create_positive_pay201_response_instance = CreatePositivePay201Response.from_json(json)
# print the JSON string representation of the object
print(CreatePositivePay201Response.to_json())

# convert the object into a dict
create_positive_pay201_response_dict = create_positive_pay201_response_instance.to_dict()
# create an instance of CreatePositivePay201Response from a dict
create_positive_pay201_response_from_dict = CreatePositivePay201Response.from_dict(create_positive_pay201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


