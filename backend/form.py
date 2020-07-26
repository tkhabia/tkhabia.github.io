data = {'duration': {'max': 3, 'min': 1}, 'wage-increase-first-year': {'max': 8.343888, 'min': 1.87478}, 'wage-increase-second-year': {'max': 8.204728, 'min': 1.416908}, 'wage-increase-third-year': {'max': 6.341044999999999, 'min': -0.19395}, 'cost-of-living-adjustment': {'max': 2, 'min': 0}, 'working-hours': {'max': 43.118697999999995, 'min': 25.082895999999998}, 'pension': {'max': 2, 'min': 0}, 'standby-pay': {'max': 16.366398, 'min': -4.136893}, 'shift-differential': {'max': 35.320045, 'min': -15.721108}, 'education-allowance': {'max': 1, 'min': 0}, 'statutory-holidays': {'max': 15.0, 'min': 8.087617999999999}, 'vacation': {'max': 2, 'min': 0}, 'longterm-disability-assistance': {'max': 1, 'min': 0}, 'contribution-to-dental-plan': {'max': 2, 'min': 0}, 'bereavement-assistance': {'max': 1, 'min': 0}, 'contribution-to-health-plan': {'max': 2, 'min': 0}}
from flask_wtf import FlaskForm,
from wtforms.fields import IntegerField, FloatField, SubmitField
from wtforms.validators import DataRequired, NumberRange

class formInput(FlaskForm):
    formInputsArray = []
    for i in data:
        if isinstance( data[i]['max'] , int):
            formInputsArray.append(IntegerField(i , [
                DataRequired(),
                NumberRange()
            ]))