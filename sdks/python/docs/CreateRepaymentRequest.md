# CreateRepaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateExternalRepaymentData**](CreateExternalRepaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_repayment_request import CreateRepaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRepaymentRequest from a JSON string
create_repayment_request_instance = CreateRepaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRepaymentRequest.to_json())

# convert the object into a dict
create_repayment_request_dict = create_repayment_request_instance.to_dict()
# create an instance of CreateRepaymentRequest from a dict
create_repayment_request_from_dict = CreateRepaymentRequest.from_dict(create_repayment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


