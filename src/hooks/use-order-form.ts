import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderSchema, OrderSchemaType } from '../schemas/order-schema';
import { OrderSubmissionState } from '../types';
import { WATCH_PACKAGES } from '../lib/constants';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';

export const useOrderForm = (selectedPackageId = '1') => {
  const [submissionState, setSubmissionState] = useState<OrderSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    errorMessage: null,
    orderSummary: null,
  });

  const form = useForm<OrderSchemaType>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      full_name: '',
      phone: '',
      whatsapp: '',
      email: '',
      address: '',
      state: '',
      qty: selectedPackageId as '1' | '2' | '3',
      color: '',
    },
  });

  const selectedQty = form.watch('qty');
  const activePackage = WATCH_PACKAGES.find((pkg) => pkg.id === selectedQty) || WATCH_PACKAGES[0];

  const onSubmit = (data: OrderSchemaType) => {
    setSubmissionState({
      isSubmitting: true,
      isSuccess: false,
      errorMessage: null,
      orderSummary: null,
    });

    const whatsappUrl = buildWhatsAppOrderUrl(data, activePackage.countLabel, activePackage.price);

    setTimeout(() => {
      setSubmissionState({
        isSubmitting: false,
        isSuccess: true,
        errorMessage: null,
        orderSummary: data,
        whatsappUrl,
      });

      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  const resetSuccessState = () => {
    setSubmissionState({
      isSubmitting: false,
      isSuccess: false,
      errorMessage: null,
      orderSummary: null,
    });
    form.reset();
  };

  return {
    form,
    activePackage,
    submissionState,
    onSubmit: form.handleSubmit(onSubmit),
    resetSuccessState,
  };
};
