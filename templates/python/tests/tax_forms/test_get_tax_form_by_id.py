from helpers.api import build_tax_forms_api, requires_token, unwrap
from helpers.tax_forms import get_tax_form_id


@requires_token
def test_fetches_a_tax_form_by_id():
    tax_form_id = get_tax_form_id()
    if tax_form_id is None:
        return

    res = build_tax_forms_api().get_tax_form_by_id_with_http_info(tax_form_id)

    assert res.status_code == 200
    tax_form = unwrap(res.data.data)
    assert tax_form.id == tax_form_id
    assert tax_form.type == "taxForm"
    assert tax_form.attributes is not None
