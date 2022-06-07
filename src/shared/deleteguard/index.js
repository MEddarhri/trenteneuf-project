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
import { toggleDeleteGuard, toggleEditGuard } from 'features/toggleSlice';
import { useDispatch } from 'react-redux';

const Index = () => {
  // edit guard ref
  const deleteGuardRef = useRef(null);
  //use dispatch
  const dispatch = useDispatch();

  const handleClickOutside = (e) => {
    if (deleteGuardRef.current && e.target.contains(deleteGuardRef.current)) {
      dispatch(toggleDeleteGuard());
    }
  };

  //handle click on cancel button
  const handleCloseEditGuard = () => {
    dispatch(toggleDeleteGuard());
  };

  return (
    <AddGuardOverlay onClick={handleClickOutside}>
      <AddEditGuardContainer ref={deleteGuardRef}>
        <CloseButtonTopRight onClick={handleCloseEditGuard}>
          <MdClose size='25px' color='#636E72' />
        </CloseButtonTopRight>
        <TopPart>
          <ImgAndTitleContainer>
            <ImgContainer>
              <img src='/images/delete-img.png' alt='delete' />
            </ImgContainer>
            <GuardContent>Garde du 08 mai 2022</GuardContent>
            <DeleteGuardSentence>Supprimer la garde</DeleteGuardSentence>
          </ImgAndTitleContainer>

          <Notif type='delete' />
        </TopPart>

        <BottomPart>
          <ButtonAddEdit regular={true} onClick={handleCloseEditGuard}>
            Annuler
          </ButtonAddEdit>
          <ButtonAddEdit>Confirmer</ButtonAddEdit>
        </BottomPart>
      </AddEditGuardContainer>
    </AddGuardOverlay>
  );
};

export default Index;
