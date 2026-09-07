# CreateBusinessDebitCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateBusinessDebitCardData**](CreateBusinessDebitCardData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_business_debit_card_request import CreateBusinessDebitCardRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBusinessDebitCardRequest from a JSON string
create_business_debit_card_request_instance = CreateBusinessDebitCardRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBusinessDebitCardRequest.to_json())

# convert the object into a dict
create_business_debit_card_request_dict = create_business_debit_card_request_instance.to_dict()
# create an instance of CreateBusinessDebitCardRequest from a dict
create_business_debit_card_request_from_dict = CreateBusinessDebitCardRequest.from_dict(create_business_debit_card_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


