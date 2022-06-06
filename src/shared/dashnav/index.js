import React from 'react';
import {
  AddGuardBtn,
  Container,
  DefaultImg,
  ImgContainer,
  ListItems,
  ListItemsLinks,
  NavLeft,
  NavList,
  NavRight,
  SplitNavRight,
} from './Styles';
import Logo from 'shared/logo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddTask } from 'features/toggleSlice';

const Index = ({ active }) => {
  //get toggle value for add addTask
  const addTask = useSelector((state) => state.toggle.addTask);
  //dipatch
  const dispatch = useDispatch();

  //handle click toggle add addTask
  const handleToggleAddTask = () => {
    dispatch(toggleAddTask());
  };

  return (
    <Container>
      <NavLeft>
        <Logo />
        <NavList>
          <ListItems>
            <ListItemsLinks activeLink={active === 'Tableau de bord'}>
              Tableau de bord
            </ListItemsLinks>
          </ListItems>
          <ListItems>
            <ListItemsLinks activeLink={active === 'Mes gardes'}>
              Mes gardes
            </ListItemsLinks>
          </ListItems>
          <ListItems>
            <ListItemsLinks activeLink={active === 'Client'}>
              Client
            </ListItemsLinks>
          </ListItems>
          <ListItems>
            <ListItemsLinks activeLink={active === 'Avis'}>Avis</ListItemsLinks>
          </ListItems>
          <ListItems>
            <ListItemsLinks activeLink={active === 'Ma pharmacie'}>
              Ma pharmacie
            </ListItemsLinks>
          </ListItems>
        </NavList>
      </NavLeft>
      <NavRight>
        <div onClick={handleToggleAddTask}>
          <AddGuardBtn>+ Ajouter une garde</AddGuardBtn>
        </div>

        <SplitNavRight />
        <ImgContainer>
          <DefaultImg>HM</DefaultImg>
        </ImgContainer>
      </NavRight>
    </Container>
  );
};

export default Index;
