# ReverseFee201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**FeeReversal**](FeeReversal.md) |  | 

## Example

```python
from unit_finance_sdk.models.reverse_fee201_response import ReverseFee201Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReverseFee201Response from a JSON string
reverse_fee201_response_instance = ReverseFee201Response.from_json(json)
# print the JSON string representation of the object
print(ReverseFee201Response.to_json())

# convert the object into a dict
reverse_fee201_response_dict = reverse_fee201_response_instance.to_dict()
# create an instance of ReverseFee201Response from a dict
reverse_fee201_response_from_dict = ReverseFee201Response.from_dict(reverse_fee201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


