# CreatePositivePayRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateWireDrawdownPositivePayData**](CreateWireDrawdownPositivePayData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_positive_pay_request import CreatePositivePayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePositivePayRequest from a JSON string
create_positive_pay_request_instance = CreatePositivePayRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePositivePayRequest.to_json())

# convert the object into a dict
create_positive_pay_request_dict = create_positive_pay_request_instance.to_dict()
# create an instance of CreatePositivePayRequest from a dict
create_positive_pay_request_from_dict = CreatePositivePayRequest.from_dict(create_positive_pay_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


