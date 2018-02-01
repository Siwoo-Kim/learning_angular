package com.learning.angular.domain;

import lombok.*;

import javax.persistence.*;

@Getter @Setter @ToString @Builder
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor
@Entity @Table(name="TBL_USER")
public class User {

    @Id @Column(name="USER_ID")
    @SequenceGenerator(name = "USER_SEQ_GENERATOR",
    sequenceName = "USER_SEQ",allocationSize = 1,initialValue = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "USER_SEQ_GENERATOR")
    private Long id;

    private String name;

    private String email;


}
