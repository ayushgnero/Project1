from flask import request, jsonify
from . import app
from .db import get_range_string, generate_booking_code,get_insurance_amount

@app.route('/request', methods=['POST'])
def post_example():
    try:
        data = request.json
        tier = "tier-1" if data["city"]==1 else "tier-2"
        insurance_premium = get_insurance_amount(get_range_string(data["adultAges"][0]),
                                                 generate_booking_code(data["adultsValue"], data["childrenValue"]),
                                                 data["insuranceAmount"],
                                                 tier)
        if data["insuranePeriod"] == 2:
            insurance_premium *= 2
        return jsonify({"insurancePremium": insurance_premium})
    except Exception as e:
        return jsonify({"error": str(e)}), 400
