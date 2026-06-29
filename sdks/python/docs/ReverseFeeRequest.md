# ReverseFeeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ReverseFeeData**](ReverseFeeData.md) |  | 

## Example

```python
from unit_finance_sdk.models.reverse_fee_request import ReverseFeeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReverseFeeRequest from a JSON string
reverse_fee_request_instance = ReverseFeeRequest.from_json(json)
# print the JSON string representation of the object
print(ReverseFeeRequest.to_json())

# convert the object into a dict
reverse_fee_request_dict = reverse_fee_request_instance.to_dict()
# create an instance of ReverseFeeRequest from a dict
reverse_fee_request_from_dict = ReverseFeeRequest.from_dict(reverse_fee_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


