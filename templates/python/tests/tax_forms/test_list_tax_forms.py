from helpers.api import build_tax_forms_api, requires_token, unwrap


@requires_token
def test_returns_a_json_api_list_of_tax_forms():
    res = build_tax_forms_api().list_tax_forms_with_http_info()

    assert res.status_code == 200
    tax_forms = res.data.data
    assert isinstance(tax_forms, list)
    for item in tax_forms:
        tax_form = unwrap(item)
        assert isinstance(tax_form.id, str)
        assert tax_form.type == "taxForm"
        assert tax_form.attributes is not None
