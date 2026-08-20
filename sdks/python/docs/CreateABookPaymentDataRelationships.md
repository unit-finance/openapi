# CreateABookPaymentDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | 
**counterparty_account** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_a_book_payment_data_relationships import CreateABookPaymentDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateABookPaymentDataRelationships from a JSON string
create_a_book_payment_data_relationships_instance = CreateABookPaymentDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateABookPaymentDataRelationships.to_json())

# convert the object into a dict
create_a_book_payment_data_relationships_dict = create_a_book_payment_data_relationships_instance.to_dict()
# create an instance of CreateABookPaymentDataRelationships from a dict
create_a_book_payment_data_relationships_from_dict = CreateABookPaymentDataRelationships.from_dict(create_a_book_payment_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


