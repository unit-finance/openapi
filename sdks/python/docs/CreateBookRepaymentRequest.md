# CreateBookRepaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateBookRepaymentData**](CreateBookRepaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_book_repayment_request import CreateBookRepaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBookRepaymentRequest from a JSON string
create_book_repayment_request_instance = CreateBookRepaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBookRepaymentRequest.to_json())

# convert the object into a dict
create_book_repayment_request_dict = create_book_repayment_request_instance.to_dict()
# create an instance of CreateBookRepaymentRequest from a dict
create_book_repayment_request_from_dict = CreateBookRepaymentRequest.from_dict(create_book_repayment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


