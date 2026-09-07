# CreateBulkPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CreateBulkPaymentRequestDataInner]**](CreateBulkPaymentRequestDataInner.md) | Array of payment creation payloads. ACH, Book, and Wire types may be mixed in the same bulk. | 

## Example

```python
from unit_finance_sdk.models.create_bulk_payment_request import CreateBulkPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBulkPaymentRequest from a JSON string
create_bulk_payment_request_instance = CreateBulkPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBulkPaymentRequest.to_json())

# convert the object into a dict
create_bulk_payment_request_dict = create_bulk_payment_request_instance.to_dict()
# create an instance of CreateBulkPaymentRequest from a dict
create_bulk_payment_request_from_dict = CreateBulkPaymentRequest.from_dict(create_bulk_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


