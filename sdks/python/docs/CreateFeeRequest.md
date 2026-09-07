# CreateFeeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateFeeData**](CreateFeeData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_fee_request import CreateFeeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFeeRequest from a JSON string
create_fee_request_instance = CreateFeeRequest.from_json(json)
# print the JSON string representation of the object
print(CreateFeeRequest.to_json())

# convert the object into a dict
create_fee_request_dict = create_fee_request_instance.to_dict()
# create an instance of CreateFeeRequest from a dict
create_fee_request_from_dict = CreateFeeRequest.from_dict(create_fee_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


