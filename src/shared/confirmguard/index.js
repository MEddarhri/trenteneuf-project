import React, { useRef, useState } from 'react';
import Notif from 'shared/notificationAddEdit';
import { MdClose } from 'react-icons/md';

import {
  AddEditGuardContainer,
  AddGuardOverlay,
  BottomPart,
  ButtonAddEdit,
  ButtonDelete,
  CloseButtonTopRight,
  DeleteGuardSentence,
  DeleteSvg,
  GuardContent,
  ImgAndTitleContainer,
  ImgContainer,
  TopPart,
} from './Styles';
import {
  toggleConfirmGuard,
  toggleDeleteGuard,
  toggleEditGuard,
} from 'features/toggleSlice';
import { useDispatch } from 'react-redux';

const Index = () => {
  // confirm guard ref
  const confirmGuardRef = useRef(null);
  //use dispatch
  const dispatch = useDispatch();

  const handleClickOutside = (e) => {
    if (confirmGuardRef.current && e.target.contains(confirmGuardRef.current)) {
      dispatch(toggleConfirmGuard());
    }
  };

  //handle click on cancel button
  const handleCloseConfirmGuard = () => {
    dispatch(toggleConfirmGuard());
  };

  return (
    <AddGuardOverlay onClick={handleClickOutside}>
      <AddEditGuardContainer ref={confirmGuardRef}>
        <CloseButtonTopRight onClick={handleCloseConfirmGuard}>
          <MdClose size='25px' color='#636E72' />
        </CloseButtonTopRight>
        <TopPart>
          <ImgAndTitleContainer>
            <ImgContainer>
              <img src='/images/confirm-guard-img.png' alt='delete' />
            </ImgContainer>
            <GuardContent>Garde du 08 mai 2022</GuardContent>
            <DeleteGuardSentence>Confirmer la garde</DeleteGuardSentence>
          </ImgAndTitleContainer>

          <Notif confirmed={true} type='confirm' />
        </TopPart>

        <BottomPart>
          <ButtonAddEdit regular={true} onClick={handleCloseConfirmGuard}>
            Annuler
          </ButtonAddEdit>
          <ButtonAddEdit>Confirmer</ButtonAddEdit>
        </BottomPart>
      </AddEditGuardContainer>
    </AddGuardOverlay>
  );
};

export default Index;
