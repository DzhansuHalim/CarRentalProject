using Business.Constants;
using Entities.Concrete;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.ValidationRules.FluentValidation
{
    public class ColorValidator : AbstractValidator<Color>
    {
        public ColorValidator()
        {
            RuleFor(c => c.ColorName).NotEmpty().WithMessage("The color can not be null");
            RuleFor(c => c.ColorName).MinimumLength(3).WithMessage("Invalide color name");
            //RuleFor(p => p.ColorName).Must(StartWithA).WithMessage("The color must start with A");

        }

        private bool StartWithA(string arg)
        {
            return arg.StartsWith("A");
        }
    }
}
