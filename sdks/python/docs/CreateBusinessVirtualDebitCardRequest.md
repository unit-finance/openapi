# CreateBusinessVirtualDebitCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateBusinessVirtualDebitCardData**](CreateBusinessVirtualDebitCardData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_business_virtual_debit_card_request import CreateBusinessVirtualDebitCardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessVirtualDebitCardRequest from a JSON string
create_business_virtual_debit_card_request_instance = CreateBusinessVirtualDebitCardRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessVirtualDebitCardRequest.to_json())

# convert the object into a dict
create_business_virtual_debit_card_request_dict = create_business_virtual_debit_card_request_instance.to_dict()
# create an instance of CreateBusinessVirtualDebitCardRequest from a dict
create_business_virtual_debit_card_request_from_dict = CreateBusinessVirtualDebitCardRequest.from_dict(create_business_virtual_debit_card_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


